import requests

# # Set your API endpoint
# url = "https://cloud.olakrutrim.com/v1/chat/completions"

# # Set your secret key
# secret_key = "mdwL0Lqqh4_5R1bcpUtr-Iek~CXuS"

# query = input("enter what u want to search for  ")
# # Prepare the headers
# headers = {
#     "Content-Type": "application/json",
#     "Authorization": f"Bearer {secret_key}",
# }

# # Prepare the JSON payload
# data = {
#     "model": "Krutrim-spectre-v2",
#     "messages": [
#         {
#             "role": "system",
#             "content": "You are a helpful assistant."
#         },
#         {
#             "role": "user",
#             "content": query
#         }
#     ],
#     "frequency_penalty": 0,
#     "logit_bias": {2435: -100, 640: -100},
#     "logprobs": True,
#     "top_logprobs": 2,
#     "max_tokens": 256,
#     "n": 1,
#     "presence_penalty": 0,
#     "response_format": {"type": "text"},
#     "stop": None,
#     "stream": False,
#     "temperature": 0,
#     "top_p": 1,
# }

# # Send the POST request to the API
# response = requests.post(url, headers=headers, json=data)

# # Check if the request was successful
# if response.status_code == 200:
#     # Parse the JSON response
#     result = response.json()
#     content = result['choices'][0]['message']['content']
#     print(content)
# else:
#     print(f"Request failed with status code {response.status_code}: {response.text}")

def get_response(query):
    url = "https://cloud.olakrutrim.com/v1/chat/completions"

    # Set your secret key
    secret_key = "mdwL0Lqqh4_5R1bcpUtr-Iek~CXuS"

    # query = input("enter what u want to search for  ")
    # Prepare the headers
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {secret_key}",
    }

    # Prepare the JSON payload
    data = {
        "model": "Krutrim-spectre-v2",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": query
            }
        ],
        "frequency_penalty": 0,
        "logit_bias": {2435: -100, 640: -100},
        "logprobs": True,
        "top_logprobs": 2,
        "max_tokens": 256,
        "n": 1,
        "presence_penalty": 0,
        "response_format": {"type": "text"},
        "stop": None,
        "stream": False,
        "temperature": 0,
        "top_p": 1,
    }

    # Send the POST request to the API
    response = requests.post(url, headers=headers, json=data)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        result = response.json()
        content = result['choices'][0]['message']['content']
        return content
    else:
        return content


response = get_response("tell me species of cats and the places they are mostly found")
print(response)