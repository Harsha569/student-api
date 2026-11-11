import requests

URL = "http://localhost:3000/students"


def test_students_api():
    response = requests.get(URL)
    assert response.status_code == 200

    response = requests.post(URL, json={
        "name": "Arun", "age": 22, "department": "ECE"
    })
    assert response.status_code == 201
    student_id = response.json()["id"]

    response = requests.put(f"{URL}/{student_id}", json={
        "name": "Arun Updated", "age": 23, "department": "CSE"
    })
    assert response.status_code == 200

    response = requests.delete(f"{URL}/{student_id}")
    assert response.status_code == 200
