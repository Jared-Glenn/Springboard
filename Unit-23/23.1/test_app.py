from app import app
from unittest import TestCase

class BloglyTestCase(TestCase):
    def test_user_list(self):
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>Users</h1>', html)