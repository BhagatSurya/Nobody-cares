const VideoUrl = require("../models/data-model")
exports.postvideoUrl = (req, res, next) => {
    const videoUrl = req.body.videoUrl; // Ensure this matches the 'name' attribute in your form
    const newvideoUrl = new VideoUrl(videoUrl);

    newvideoUrl.save()
        .then(() => {
            res.redirect('/'); // Redirect after successful save
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error saving the video URL');
        });
};


exports.getAddVideoLink = (req, res, next) => {
    res.render('admin/add-video-link', { pageTitle: 'Add Video Link' });
};