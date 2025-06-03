import pytest
from pdf_handler.models import PDF, SplitPDF, ProtectPDF, IntercalatePDFs, MergePDF, WatermarkPDF, EnumeratePDF

@pytest.mark.django_db
def test_create_pdf():
    pdf = PDF.objects.create(pdf='pdfs/test.pdf')
    assert str(pdf) == 'pdfs/test.pdf'

@pytest.mark.django_db
def test_create_split_pdf():
    split = SplitPDF.objects.create(pdf='pdfs/test.pdf', output='pdfs/out.pdf', split_in_page=3)
    assert split.split_in_page == 3
    assert str(split) == 'pdfs/test.pdf'

@pytest.mark.django_db
def test_create_protect_pdf():
    obj = ProtectPDF.objects.create(pdf='pdfs/test.pdf', password='secret')
    assert obj.password == 'secret'
    assert str(obj) == 'pdfs/test.pdf'

@pytest.mark.django_db
def test_create_merge_pdf():
    merge = MergePDF.objects.create(output='pdfs/merged.pdf')
    assert str(merge) == 'pdfs/merged.pdf'
