import os
import tempfile
import pytest
from rest_framework.test import APIClient
from django.urls import reverse
from django.core.files.uploadedfile import SimpleUploadedFile

@pytest.fixture
def api_client():
    return APIClient()

def create_dummy_pdf(name="test.pdf"):
    path = os.path.join(tempfile.gettempdir(), name)
    with open(path, "wb") as f:
        f.write(b"%PDF-1.4\n%%EOF")
    return path

@pytest.mark.django_db
def test_split_pdf_invalid(api_client):
    path = create_dummy_pdf("split.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/api/pdf-handler/split/', {
            'pdf': f,
            'split_in_page': 2
        }, format='multipart')
    assert response.status_code == 400

@pytest.mark.django_db
def test_merge_pdf_invalid(api_client):
    path = create_dummy_pdf("merge.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/api/pdf-handler/merge/', {
            'output': 'merged.pdf'
        }, format='multipart')
    assert response.status_code == 400

@pytest.mark.django_db
def test_block_pdf_invalid(api_client):
    path = create_dummy_pdf("block.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/api/pdf-handler/secure/block/', {
            'pdf': f,
            'password': 'secret'
        }, format='multipart')
    assert response.status_code == 500

@pytest.mark.django_db
def test_unblock_pdf_invalid(api_client):
    path = create_dummy_pdf("unblock.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/api/pdf-handler/secure/unblock/', {
            'pdf': f,
            'password': 'secret'
        }, format='multipart')
    assert response.status_code == 500

@pytest.mark.django_db
def test_enumerate_pdf_invalid(api_client):
    path = create_dummy_pdf("enumerate.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/api/pdf-handler/enumerate/', {
            'pdf': f,
            'start': 1,
            'number': 5,
            'output': 'enumerated.pdf'
        }, format='multipart')
    assert response.status_code == 500
