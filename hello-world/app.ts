import { 
    //APIGatewayProxyEvent, 
    APIGatewayProxyResult 
    } from 'aws-lambda';

import { handler, StepFunctionEvent } from "./worker"
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */


export const lambdaHandler = async (event: StepFunctionEvent): Promise<APIGatewayProxyResult> => {
    return handler(event);
};
