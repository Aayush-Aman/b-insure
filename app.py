from flask import Flask, request, render_template, jsonify
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import requests

app = Flask(__name__, static_folder= 'statics', template_folder= 'templates')

@app.route('/')
def index():
    return render_template('home1.html')

@app.route('/life_insurance')
def life_insurance():
    return render_template('Life_Insurance.html')
@app.route('/travel_insurance')
def travel_insurance():
    return render_template('Travel_Insurance.html')

@app.route('/car_insurance')
def car_insurance():
    return render_template('Car_Insurance.html')

@app.route('/home_insurance')
def home_insurance():
    return render_template('Home_Insurance.html')

@app.route('/auto_insurance')
def auto_insurance():
    return render_template('Auto_Insurance.html')

@app.route('/general_liability')
def general_liability():
    return render_template('General_Liability.html')

@app.route('/warehouse')
def warehouse():
    return render_template('Warehouse.html')

@app.route('/restaurant')
def restaurant():
    return render_template('Restaurant.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/broker')
def broker():
    return render_template('broker.html')

@app.route('/why')
def why():
    return render_template('why.html')

@app.route('/faq')
def faq():
    return render_template('./faq/faq.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/sitemap')
def sitemap():
    return render_template('sitemap.html')


@app.route('/about')
def about():
    return render_template('about-us.html')

@app.route('/terms-of-use')
def terms_of_use():
    return render_template('terms-of-use.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/cookie-policy')
def cookie_policy():
    return render_template('cookie-policy.html')

# @app.route('/submit_form', methods=['POST', 'GET'])
# def submit_form():
#     name = request.form.get('name')
#     country_code = request.form.get('country_code')
#     contact_number = request.form.get('contact_number')
#     planning_to_buy = request.form.get('planning_to_buy')
#     email = request.form.get('email')
#     insurance_type = request.form.get('insurance_type')
#     if not insurance_type:
#         insurance_type = request.form.get('home-type-insurance')

#     # Process the data as needed
#     print(f"Name: {name}")
#     print(f"Country Code: {country_code}")
#     print(f"Contact Number: {contact_number}")
#     print(f"Planning to Buy: {planning_to_buy}")
#     print(f"Email: {email}")

#     # Email configuration
#     sender_email = "greenhathackers8@gmail.com"
#     receiver_email = "prince@withincloud.com"  # Replace with the recipient's email address
#     password = "htjg evgj hhvn ovsy"  # Use your actual email password or an app-specific password if using Gmail

#     # Create the email content
#     message = MIMEMultipart()
#     message['From'] = sender_email
#     message['To'] = receiver_email
#     message['Subject'] = "New Quote Request"
    
#     body = f"""
#     Name: {name}
#     Country Code: {country_code}
#     Contact Number: {contact_number}
#     Planning to Buy: {planning_to_buy}
#     Email: {email}
#     Insurance Type: {insurance_type}
#     """
    
#     message.attach(MIMEText(body, 'plain'))

#     # Send the email
#     try:
#         with smtplib.SMTP('smtp.gmail.com', 587) as server:
#             server.starttls()
#             server.login(sender_email, password)
#             server.sendmail(sender_email, receiver_email, message.as_string())
#         return jsonify({'status': 'success', 'message': 'Form submitted and email sent successfully!'})
#     except Exception as e:
#         print(e)
#         return jsonify({'status': 'error', 'message': 'Form submitted, but an error occurred while sending the email.'}), 500


@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    name = request.form.get('name')
    country_code = request.form.get('country_code')
    contact_number = request.form.get('contact_number')
    planning_to_buy = request.form.get('planning_to_buy')
    email = request.form.get('email')
    insurance_type = request.form.get('insurance_type')
    if not insurance_type:
        insurance_type = request.form.get('home-type-insurance')

    # Process the data as needed
    print(f"Name: {name}")
    print(f"Country Code: {country_code}")
    print(f"Contact Number: {contact_number}")
    print(f"Planning to Buy: {planning_to_buy}")
    print(f"Email: {email}")

    # Email configuration
    sender_email = "developers@withincloud.com"
    receiver_email = "amanaayush171@gmail.com"  # Replace with the recipient's email address
    mailchimp_api_key = "md-Hmkhg74nRGe5P5WN9igUlg"  # Replace with your Mailchimp API key

    # Creating the email content for your team
    message_to_team = MIMEMultipart()
    message_to_team['From'] = sender_email
    message_to_team['To'] = receiver_email
    message_to_team['Subject'] = "New Quote Request"
    body_to_team = f"""
    Name: {name}
    Country Code: {country_code}
    Contact Number: {contact_number}
    Planning to Buy: {planning_to_buy}
    Email: {email}
    Insurance Type: {insurance_type}
    """
    message_to_team.attach(MIMEText(body_to_team, 'plain'))

    # Creating the thank-you email content for the submitter
    message_to_submitter = MIMEMultipart()
    message_to_submitter['From'] = sender_email
    message_to_submitter['To'] = email
    message_to_submitter['Subject'] = "Thank You for Your Response"
    body_to_submitter = f"""
    Hi {name},

    Thank you for reaching out to us! Our team will get back to you soon.

    Best regards,
    Team B-insure
    """
    message_to_submitter.attach(MIMEText(body_to_submitter, 'plain'))

    # URLs for Mandrill API
    mandrill_url = "https://mandrillapp.com/api/1.0/messages/send.json"
    
    # Email data for Mandrill
    data_to_team = {
        "key": mailchimp_api_key,
        "message": {
            "from_email": sender_email,
            "to": [
                {
                    "email": receiver_email,
                    "type": "to"
                }
            ],
            "subject": "New Quote Request",
            "text": body_to_team
        }
    }
    
    data_to_submitter = {
        "key": mailchimp_api_key,
        "message": {
            "from_email": sender_email,
            "to": [
                {
                    "email": email,
                    "type": "to"
                }
            ],
            "subject": "Thank You for Your Response",
            "text": body_to_submitter
        }
    }

    try:
        # Sending email to your team using Mandrill
        response_to_team = requests.post(mandrill_url, json=data_to_team)
        response_to_team.raise_for_status()

        # Sending thank-you email to the form submitter using Mandrill
        response_to_submitter = requests.post(mandrill_url, json=data_to_submitter)
        response_to_submitter.raise_for_status()

        return jsonify({'status': 'success', 'message': 'Form submitted and emails sent successfully!'})
    except requests.exceptions.RequestException as e:
        print(e)
        return jsonify({'status': 'error', 'message': 'Form submitted, but an error occurred while sending emails.'}), 500


if __name__ == '__main__':
    app.run(debug=True)
