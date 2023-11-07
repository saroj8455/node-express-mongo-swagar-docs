import {Request, Response, NextFunction, ErrorRequestHandler} from "express"
import {isHttpError} from "http-errors";

 const AppErrorHandler:ErrorRequestHandler = (err, req, res, next)=>{
     console.log(err);
     let statusCode = 500;
     let errorMessage="Something Went Wrong.";

     if (isHttpError(err)) {
         statusCode = err.statusCode;
         errorMessage = err.message;
     }

     res.status(statusCode).jsonp({
         error: {
             message:errorMessage
         }
     })
}

export  default  AppErrorHandler;