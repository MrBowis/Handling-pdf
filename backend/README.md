## Backend:
Be sure you have python installed on your system to run commands below:

### Create envirnment - Linux/MacOS:
```bash
python -m venv venv
source venv/bin/activate
```
### Create environment - Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

### Setup environment:
```bash
pip install -r requirements.txt
```

### Run the server:
```bash
python manage.py runserver
```

### Recommended:
```bash
python manage.py makemigrations
python manage.py migrate
```