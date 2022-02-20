const posts = [
    {öğrenci: 'Berkcan', ilgi:'GameDev', üniversite:'ege üniversitesi'},
    {öğrenci: 'Selim', ilgi:'WebDev', üniversite:'ege üniversitesi'},
    {öğrenci: 'Hilmi', ilgi:'BackEndDev', üniversite:'ege üniversitesi'}
]

let newPost = {öğrenci: 'Furkan', ilgi:'Database', üniversite:'ege üniversitesi'}

const listPost = (data) => {
    return new Promise((resolve, reject) => {
        console.log('postlar listeleniyor...');
        if (data) {
            console.log('listeleme başarılı');
            resolve(posts);
        } else {
            reject('postlar listelenemedi!');
        }
    });
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log('post ekleniyor...');
        if (newPost) {
            posts.push(newPost);
            resolve('ekleme başarılı');
        } else {
            reject('ekleme başarısız!');
        }
    });
};

const processPost = async () => {
    try {

        let listedPosts = await listPost(true);
        console.log(listedPosts);
        console.log('------------------------');

        let isAdded = await addPost(newPost);
        console.log(isAdded);

        listedPosts = await listPost(true);
        console.log(listedPosts);

    } catch (err) {
        console.log(err);
    }
}

processPost();
