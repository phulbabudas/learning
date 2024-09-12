const http=require ('http');

const server=http.createServer((req,res)=>{
    console.log('request has been node frome to server');
   console.log(req);
})
//port number ,host callback func
server.listen(74,'localhost', ()=>{
console.log('server is  listening on port 74');

});
    