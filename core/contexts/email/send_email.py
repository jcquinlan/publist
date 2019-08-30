from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string

def send_email_with_defaults(subject, body, html_body, user_emails):
    # Don't actually send emails in the development environment
    if settings.ENV == 'dev':
        return

    send_mail(
        subject,
        body,
        "Publist <team@publist.me>",
        user_emails,
        html_message=html_body
    )

def send_new_match_emails(match, users):
    email_options = {
        "title": match.tutorial.title,
        "match_url": f"{settings.BASE_URL}match/{match.id}/",
        "user_names": ', '.join([user.username for user in users])
    }

    body = render_to_string('emails/new_match/new_match.txt', email_options)
    html_body = render_to_string('emails/new_match/new_match.html', email_options)
    user_emails = [user.email for user in users]

    send_email_with_defaults("You have a new match!", body, html_body, user_emails)

def send_new_comment_emails(comment, match, users):
    email_options = {
        "author": comment.user.username,
        "text": comment.text,
        "title": match.tutorial.title,
        "match_url": f"{settings.BASE_URL}match/{match.id}/",
    }

    body = render_to_string('emails/new_comment/new_comment.txt', email_options)
    html_body = render_to_string('emails/new_comment/new_comment.html', email_options)
    user_emails = [user.email for user in users]

    send_email_with_defaults("New comment on The Bit", body, html_body, user_emails)

def send_changed_password_email(user):
    user_emails = [user.email]
    body = render_to_string('emails/password_changed/password_changed.txt', {})
    html_body = render_to_string('emails/password_changed/password_changed.html', {})

    send_email_with_defaults("Password for The Bit successfully changed.", body, html_body, user_emails)
