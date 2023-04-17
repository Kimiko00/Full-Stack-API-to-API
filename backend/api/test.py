import requests, os
import json

# url = f"https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
# response = requests.get(url)
# print(response.json())

url = f"https://services.nvd.nist.gov/rest/json/cves/2.0/?resultsPerPage=2&startIndex=0"

response = requests.get(url)
data = json.loads(response.content)

# print(data["vulnerabilities"])

nist_list = []
for item in data["vulnerabilities"]:
    cve = item["cve"]
    # print(cve)
    # cve_id = cve["id"]
    # cve_description = cve["descriptions"][0]["value"]
    # print(cve_description)

    nist_dict = {
        "id": cve["id"],
        "desc": cve["descriptions"][0]["value"]
    }

    nist_list.append(nist_dict)
print(nist_list)
