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
    # Falta 'output' → debe fallar
    path = create_dummy_pdf("split.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/split/', {
            'pdf': f,
            'split_in_page': 2
        }, format='multipart')
    assert response.status_code == 404

@pytest.mark.django_db
def test_merge_pdf_invalid(api_client):
    # Falta 'pdf' → debe fallar
    path = create_dummy_pdf("merge.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/merge/', {
            'output': 'merged.pdf'
        }, format='multipart')
    assert response.status_code == 404

@pytest.mark.django_db
def test_watermark_pdf_invalid(api_client):
    # Falta 'pdf' → debe fallar
    path = create_dummy_pdf("watermark.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/watermark/', {
            'pdf': f,
            'watermark_text': 'Sample Watermark'
        }, format='multipart')
    assert response.status_code == 404

@pytest.mark.django_db
def test_block_pdf_invalid(api_client):
    # Falta 'pdf' → debe fallar
    path = create_dummy_pdf("block.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/secure/block/', {
            'password': 'secret'
        }, format='multipart')
    assert response.status_code == 404

@pytest.mark.django_db
def test_unblock_pdf_invalid(api_client):
    # Falta 'pdf' → debe fallar
    path = create_dummy_pdf("unblock.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/secure/unblock/', {
            'password': 'secret'
        }, format='multipart')
    assert response.status_code == 404

@pytest.mark.django_db
def test_enumerate_pdf_invalid(api_client):
    # Falta 'pdf' → debe fallar
    path = create_dummy_pdf("enumerate.pdf")
    with open(path, 'rb') as f:
        response = api_client.post('/enumerate/', {
            'pdf': f,
        }, format='multipart')
    assert response.status_code == 404
