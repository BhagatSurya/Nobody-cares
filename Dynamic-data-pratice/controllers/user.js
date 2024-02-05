const VideoUrl = require("../models/data-model");

exports.getVideos = (req, res, next) => {
    VideoUrl.getExistingUrls()
        .then(urls => {
            res.render('user/home', {
                videoUrls: urls,
                pageTitle: 'Video List',
                path: '/'
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error retrieving video URLs');
        });
};



