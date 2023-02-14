from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr
from pydantic import BaseModel


app = FastAPI()
dynamodb = boto3.resource('dynamodb', region_name="us-east-2",
         aws_access_key_id="AKIAX3FHVXYSKFFYPGE7",
         aws_secret_access_key= "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")
table = dynamodb.Table('test6-DB-staging')



# response = table.query(
#     KeyConditionExpression=Key('PK').eq('COMP#0')
# )

response = table.get_item(
   Key={
      'PK': '0',
      'SK': '0'
   }
)

data = str(response['Item']['companyEmail'])

app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:3001/",
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["Content-Type","application/xml"],
)

@app.get("/")
async def root():
    return data