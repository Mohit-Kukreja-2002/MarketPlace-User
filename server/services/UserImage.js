import cloudinary from "cloudinary";

export const addUserImage = async (req, res) => {
    try {
        const { avatar } = req.body;

        const myCloud = await cloudinary.v2.uploader.upload(avatar, {
            folder: "Users",
            width: 150,
        });
        let img = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        };

        res.status(200).json({
            success: true,
            img
        });
    } catch (error) {
        console.log("Error in addUserImage: " + error.message);
        return res.status(500).json({
            error: "Internal Server Error",
        })
    }
}


export const deleteUserImage = async (req, res) => {
    try {
        const { public_id } = req.body;

        await cloudinary.v2.uploader.destroy(public_id);

        res.status(200).json({
            success: true,
        });
        
    } catch (error) {
        console.log("Error in deleteUserImage: " + error.message);
        return res.status(500).json({
            error: "Internal Server Error",
        })
    }
}
