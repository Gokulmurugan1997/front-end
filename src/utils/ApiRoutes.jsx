const ApiRoutes = {
    LOGIN:{
        path:"/user/login",
        authenticate:false
    },
    SIGNUP:{
        path:"/user/signup",
        authenticate:false
    },
    RESETPASSWORD:{
        path:"/user/resetpassword",
        authenticate:false
    },
    FORGETPASSWORD:{
        path:"/user/forgetpassword",
        authenticate:false
    },
    MARKDOWNLIST:{
        path:"/user/getMarkdownlist",
        authenticate:true
    },
    MARKDOWNFINDBYID:{
        path:"/user",
        authenticate:true
    },
    CREATEMARKDOWN:{
        path:"/user/createMarkdown",
        authenticate:true
    },
    UPDATEMARKDOWN:{
        path:"/user",
        authenticate:true
    },
    DELETEMARKDOWN:{
        path:"/user",
        authenticate:true
    },
    COUNTALL:{
        path:"/user",
        authenticate:true
    },
    }

export default ApiRoutes