module.exports={
    lintOnSave:false,
    devServer: {
        proxy:{
            '/api':{
                target:'http://localhost:9001/',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        port:8888,
        open:true,
        overlay: {
            warning: false,
            errors: false
        },

    },


}