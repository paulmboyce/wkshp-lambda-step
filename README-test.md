# MANUAL TESTING DEV LOOP:

## START STACK IN WATCH MODE FOR AUTO DEPLOY OF CHANGES

```
sam sync --stack-name step-workshop-m6 --watch
```

## TAIL THE STACK LOGS
Can tail whole stack or a part and can also then grep for specifics

```
sam logs --stack-name step-workshop-m6 --tail
 
sam logs --stack-name step-workshop-m6 --tail | grep DANG
```

## INVOKE LAMBDA ON CLI 

Add **--invocation-type Event** to invoke async for testing DLQs

```
aws lambda invoke --function-name step-workshop-m6-HelloWorldFunction-pXuQzCA1l7Ja  --cli-binary-format raw-in-base64-out --payload '{ "who": "retry ONE ASYNC DANG" }' response.json --invocation-type Event
```

## TO INVOKE LAMBDA  ASYNCRONOUSLY IN STEP FUNCTION:

```
 // To invoke lambda asyncronously, use  "InvocationType": "Event"
 
 "Type": "Task",
            "Resource": "arn:aws:states:::lambda:invoke",
            "Parameters": {
                "FunctionName":"arn...",
                "Payload.$": "$.lambda",
                "InvocationType": "Event"
            },
```
