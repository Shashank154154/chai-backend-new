const asyncHandler = (requestHandler) => {
     (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch(err) = next(err)
     }
}

    export {asyncHandler}


    //  const asyncHandler = () =>{}
  //  const asyncHandler = (func) =>()=>{}
   //  const asyncHandler = (func) =>async=>{}=>{}
    
    
//  const asyncHandler = fn => (req, res, next) => {try{

 // }catch(err){
  //  next(err)
 // }//like this function