

export type StepFunctionEvent = {
   who: string;
}

export const handler = (event:any) => {
    const msg = ">>>> DARN IT!!!" + event.who + " # " + Date.now();
    console.log(msg)
    //throw Error("OOPS")
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `hello ${event.who}`,
        }),
    };
}