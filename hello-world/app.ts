import { 
    //APIGatewayProxyEvent, 
    APIGatewayProxyResult 
    } from 'aws-lambda';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

type StepFunctionEvent = {
   who: string;
}
export const lambdaHandler = async (event: StepFunctionEvent): Promise<APIGatewayProxyResult> => {
    const msg = ">>>> DANG IT!!!" + event.who + " # " + Date.now();
    console.log(msg)
    //throw Error("OOPS")
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `hello ${event.who}`,
        }),
    };
};
