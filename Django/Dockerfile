from python:3.7

RUN pip install Django==2.1.4 psycopg2

WORKDIR /usr/src/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
