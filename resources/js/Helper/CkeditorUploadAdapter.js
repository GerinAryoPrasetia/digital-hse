// src/ckeditor/ckeditor-upload-adapter.js

class CustomUploadAdapter {
    constructor(loader, url) {
        // Define the file loader
        this.loader = loader;
        // Define the URL for the image upload endpoint in your Laravel backend
        this.url = url;
    }

    upload() {
        return this.loader.file.then(
            (file) =>
                new Promise((resolve, reject) => {
                    // Perform the actual file upload here using fetch, Axios, or any other HTTP library
                    // Send the file to your Laravel backend endpoint for image upload
                    // Make sure to handle any necessary headers, authorization, etc.
                    // After the file is uploaded successfully, resolve with the response from your server
                    // or reject if there's an error
                })
        );
    }
}

function CustomUploadAdapterPlugin(editor, url) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new CustomUploadAdapter(loader, url);
    };
}

export default CustomUploadAdapterPlugin;
