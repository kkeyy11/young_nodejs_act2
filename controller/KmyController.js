const ymk = {
    index:(req, res)=>{
        res.render('index', {title:'Portfolio'});

    },
    social:(req, res)=>{
        res.render('social', {title:'Social Info'});

    },
    personalinfo:(req, res)=>{
        res.render('personalinfo', {title:'Personal Info'});

    },
    gameinfo:(req, res)=>{
        res.render('gameinfo', {title:'Game Profiles'});

    },
    special:(req, res)=>{
        res.render('special', {title:'Special Mention'});

    }

};

module.exports = ymk;