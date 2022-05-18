import React, {useState, useEffect} from 'react';
import { Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PostForm from '../components/PostForm';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

function PostEdit(){

    const classes = useStyles();

    //引数で編集するレコードのidを取得
    const {id} = useParams();

    //初期値をセット
    const [editData, setEditData] = useState({name:"", content:""});

    //ボタン名を登録
    const btnName = "変更";

    //画面に到着したら
    useEffect(() => {
        getEditData();
    }, [])

    const getEditData = () => {
        axios
            .post('/api/edit', {
                id: id
            })
            .then(response => {
                setEditData(response.data);
            })
            .catch(() => {
                console.log('通信に失敗しました');
            });
    }

    const inputChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        editData[key] = value;
        let data = Object.assign({}, editData);
        setEditData(data);

    }

    const editPost = async() => {

        if(editData == ''){
            return;
        }

        await axios.post('/api/update', {
            id: id,
            name: editData.name,
            content: editData.content
        })
        .then(() => {
            console.log('更新が完了しました');
        })
        .catch(() => {
            console.log('更新に失敗しました');
        });
    }

    return(
        <div className='"container'>
            <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <div className='card'>
                        <h1>編集画面</h1>
                        <Card className={classes.card}>
                            <PostForm data={editData} inputChange={inputChange} btnFunc={editPost} btnName={btnName}/>
                        </Card>
                    </div>
                </div>
            </div>
        </div>  
    );

}

export default PostEdit;