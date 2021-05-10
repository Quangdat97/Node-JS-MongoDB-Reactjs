import React, { Component } from 'react';
import { Card,List, Image } from 'antd';
import {login_click} from '../../router/Link_dieuhuong'
import Login from '../User/Login';

const data = [
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-300x225.jpg',
        img_name: 'Chuck Taylor Classic'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-1-1-300x225.jpg',
        img_name: 'One Star Love the Progress'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-3-300x225.jpg',
        img_name: 'One Star Sunbaked'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-5-1-300x225.jpg',
        img_name: 'Chuck 70 Archive Prints Hi'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-classic-6-1-300x225.jpg',
        img_name: 'Chuck 70 Psy-Kicks Ox'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-sunbaked-2-1-300x225.jpg',
        img_name: 'Chuck Taylor All Star 70 Full Gator Hi'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-chuck-07-300x225.jpg',
        img_name: 'Chuck Taylor Classic'
    },
    {
        link_img: 'http://mauweb.monamedia.net/converse/wp-content/uploads/2019/05/women-psy-1-1-300x225.jpg',
        img_name: 'One Star Love the Progress'
    },
  ];

class Category extends Component{

    render(){
        if(localStorage.getItem('account')===null)
        {
            login_click();
            return <Login></Login>
        }
        return(
            <div className="content">
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={data}
                    renderItem={item => (
                        <>
                        <List.Item>
                        <Card>
                            <Image
                                    width={'100%'}
                                    src={item.link_img}
                                    placeholder={
                                    <Image
                                        preview={false}
                                        // src = {item.link_img + "x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"}
                                        width={200}
                                    />
                                    }
                                />
                                <p>{item.img_name}</p>
                        </Card>
                            
                        </List.Item>
                        </>
                    )}
                />
            </div>    
        );
    }
};

export default Category;