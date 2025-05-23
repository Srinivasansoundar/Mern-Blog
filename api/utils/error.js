module.exports.errorHandler=(statusCode,message)=>{
    const error=new Error();
    error.statusCode=statusCode
    error.message=message
    return error;
}
// when we don't have error but we need to build the custom error,
// that's why we build this error function