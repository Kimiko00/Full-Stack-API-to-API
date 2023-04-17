from dotenv import load_dotenv
from flask import Flask

import json
import requests, os

class NvdAPI:
    def config():
        load_dotenv()
    
    def __init__(self):
        self.url = os.getenv('url')
        
    def fetch_cves(self, query):
        url = f"{self.url}/cves/2.0?keywordSearch={query}&resultsPerPage=2&startIndex=0"
        response = requests.get(url)
        data = json.loads(response.content)
        
        nist_list = []
        for item in data["vulnerabilities"]:
            cve = item["cve"]

            nist_dict = {
                "id": cve["id"],
                "description": cve["descriptions"][0]["value"]
            }
            nist_list.append(nist_dict)
        return nist_list
