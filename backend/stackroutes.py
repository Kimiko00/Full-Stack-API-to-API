import requests
from stackmodels import db, Question

class Stack:
    def __init__(self, app):
        self.app = app

    def fetch_questions(self):
        response = requests.get(
            'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow'
        )

        for data in response.json()['items']:
            if data['answer_count'] != 0:
                title = data['title']
                link = data['link']
                question = Question(title=title, link=link)
                db.session.add(question)

        db.session.commit()

    def register_routes(self):
    #     @self.app.route('/fetch-questions')
    #     def fetch_questions_route():
    #         self.fetch_questions()
    #         return 'Questions fetched and stored successfully!'

        @self.app.route('/datas')
        def data_route():
            self.fetch_questions()
            
            questions = Question.query.all()
            r_output = []
            for data in questions:
                data_question = {
                    'title': data.title,
                    'link': data.link
                }
                r_output.append(data_question)
            return {"data": r_output}
        
        @self.app.route('/data/<id>')
        def single_data_route(id):
            questions = Question.query.get_or_404(id)
            
            return {
                "title": questions.title,
                "link": questions.link
            }
