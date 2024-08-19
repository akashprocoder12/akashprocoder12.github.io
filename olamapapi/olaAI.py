# Assume openai>=1.0.0
from openai import OpenAI
# Create an OpenAI client with your KRUTRIM API KEY and endpoint
  
openai = OpenAI(
    api_key="mdwL0Lqqh4_5R1bcpUtr-Iek~CXuS",
    base_url="https://cloud.olakrutrim.com/v1",
)

query = input("enter what u want to search:  ")

chat_completion = openai.chat.completions.create(
    model="Krutrim-spectre-v2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content":query }
    ]
)
print(chat_completion.choices[0].message.content)