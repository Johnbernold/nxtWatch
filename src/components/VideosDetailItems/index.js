import {Component} from "react"

import ReactPlayer from 'react-player'

import {} from "./styledComponent"    

class VideosDetailItems extends Component {


     compoundDidMount() {
         this.getVideoDetailApi()
     }

    getVideoDetailApi = async () => {
          
    }


    render() {
        


        return(
            <MainVideoPlayerSection>
                <VideoPlayer>
                    <ReactPlayer url={} />
                </VideoPlayer>
                <VideoHeading>{}</VideoHeading>
                <VideoIconsAndViewsSection>
                    <ViewsSection>{}</ViewsSection>
                    <VideosLikeSection>{}</VideosLikeSection>
                </VideoIconsAndViewsSection>
                <hr/>
                <ProfileDetailsSection>
                    <ProfilePhoto/>
                    <ProfileTextSection>
                        <ChannelName></ChannelName>
                        <SubscribtionText></SubscribtionText>
                        <DescriptionText></DescriptionText>
                    </ProfileTextSection>
                </ProfileDetailsSection>


            </MainVideoPlayerSection>
        )
    }
}