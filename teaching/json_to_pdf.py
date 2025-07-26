#!/usr/bin/env python3
import json
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.units import inch

def make_pdf(json_path, pdf_path):
    # load data
    with open(json_path, 'r') as f:
        projects = json.load(f)

    # set up document
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.75*inch,
        bottomMargin=0.75*inch
    )
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name='Justify', alignment=4))

    story = []

    # Title
    story.append(Paragraph('Personalized Assessments for Introductory Computer Programming Courses', styles['Title']))
    story.append(Spacer(1, 0.05*inch))
    # Author
    story.append(Paragraph('Ayush Pandey', styles['Title']))
    story.append(Spacer(1, 0.05*inch))
    story.append(Paragraph('UC Merced', styles['Title']))
    story.append(Spacer(1, 0.2*inch))

    # Intro paragraph
    intro = (
        'This document contains a collection of project ideas that can be used to launch a new style of assessment in introductory computer programming courses. '
        'Below are the instructions that students receive:'
    )
    story.append(Paragraph(intro, styles['Normal']))
    story.append(Spacer(1, 0.1*inch))
    next = (
        'All students must work on an independent Python project. '
        'This project must demonstrate the following five key elements of Python programming that you learn in this class:'
    )
    story.append(Paragraph(next, styles['Normal']))
    story.append(Spacer(1, 0.1*inch))

    # Bullet‐style list
    bullets = [
        'Control the program flow with branching and loops',
        'Use correct data structures for optimal computations, as relevant for engineering',
        'Use functions for modular code',
        'Load data from real-world files (or web), write outputs to files, and visualize outputs in graphs',
        'Document logic with comments, docstrings, and user-friendly messages'
    ]
    for b in bullets:
        story.append(Paragraph(f'• {b}', styles['Normal']))
    story.append(Spacer(1, 0.2*inch))
    # Link to wip_cs1.pdf
    link_txt = (
        'For more information on how to organize logistics, rubrics, and scaffolded milestones, '
        'refer to <a href="https://ayush-pandey.github.io/documents/wip_cs1.pdf">this document</a>.'
    )
    story.append(Paragraph(link_txt, styles['Normal']))
    story.append(Spacer(1, 0.1*inch))

    # Link to grader
    grader_txt = (
        'An automated open-ended grader compatible with these projects is available at '
        '<a href="https://github.com/pyEdTools/flexigrader">github.com/pyEdTools/flexigrader</a>.'
    )
    story.append(Paragraph(grader_txt, styles['Normal']))
    story.append(Spacer(1, 0.3*inch))

    # Add each project
    for proj in projects:
        story.append(Paragraph(proj['title'], styles['Heading2']))
        story.append(Spacer(1, 0.05*inch))
        story.append(Paragraph(proj['description'], styles['Justify']))
        story.append(Spacer(1, 0.05*inch))
        cats = ', '.join(proj.get('categories', []))
        story.append(Paragraph(f'<b>Categories:</b> {cats}', styles['Italic']))
        story.append(Spacer(1, 0.2*inch))

    # build PDF
    doc.build(story)
    print(f'⟶ PDF written to {pdf_path}')

if __name__ == '__main__':
    make_pdf('all_cs1_projects.json', 'cs1_projects.pdf')
