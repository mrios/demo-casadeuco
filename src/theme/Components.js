import styled  from 'styled-components';
import { Timeline, Steps, Icon, Col , Row, Card, Progress, Layout } from 'antd';
import Variables from './variables';

const Step = Steps.Step;
const { Header, Footer, Sider, Content } = Layout;

const Flex = styled.div`
	display: flex;
`

const BodyText  = styled(Flex)`
	color: ${Variables.Pallet.dark};
	margin: 15px 0;
	font-size: 14px;

	.service-wrapper {
		text-align: center;

		.service-icon-wrapper {
			
			i.anticon {
				background: aliceblue;
			    padding: 25px;
			    border-radius: 50%;
			    border: 15px solid #ececec;
			    font-size: 60px;
			    margin-bottom: 10px;
			}
		}
	}

	.team-wrapper {
		width: 100%;

		.team-text {
			padding: 1%;
		}

		.ant-avatar {
			width: 100px;
		    height: 100px;
		    line-height: 100px;
		    border-radius: 50px;
		}	
	}
`

const HeaderX = styled(Header)`
  background: ${Variables.Pallet.lighten} !important;
  color: ${Variables.Pallet.medium} !important;
  font-size: 3em;
  text-align: center;
  height: 150px !important;
  line-height: 150px !important;
`

const ContentX = styled(Content)`
  background: ${Variables.Pallet.lighten} !important;
  color: ${Variables.Pallet.dark} !important;

  	.toggleable {
		position: relative;
		width: 100%;
    	text-align: center;
    	height: 600px;
    	line-height: 600px;
	}

	.show {
		top: 0;
	    width: 100%;
	    position: absolute;
	    left: -30em;
	    -webkit-animation: slide-in 0.3s forwards;
	    animation: slide-in 0.3s forwards;
	    line-height: 55px;

	    .service-title {
	    	line-height: 30px;
	    }
	}

	.show-0 {
	    top: 0;
	}

	.show-1 {
		top: 185px;
		-webkit-animation: slide-in 0.6s forwards;
	    animation: slide-in 0.6s forwards;
	}

	.show-2 {
		top: 400px;
		-webkit-animation: slide-in 1s forwards;
	    animation: slide-in 1s forwards;
	}

	@-webkit-keyframes slide-in {
	  100% { left: 0 }
	}

	@keyframes slide-in {
	  100% { left: 0 }
	}
`

const LayoutX = styled(Layout)`

	text-align: center;

	div.ant-layout-header {
		background-color: #ec392f;
		background-image: url('assets/images/logo.jpeg');
		background-size: 25%;
		background-repeat: no-repeat;
		background-position: 400px;
	  	color: ${Variables.Pallet.lighten} !important;
		text-shadow: -1px 0px 6px #2791CF;
		text-indent: 200px;  
		font-size: 60px;
		justify-content: center;
		height: 400px;
		line-height: 400px;

		div {
			justify-content: flex-end;
			padding: 0 5%;
		}
	}

  	div.ant-layout-content {
	  	color: ${Variables.Pallet.dark} !important;
		font-style: italic;
		border-top: 1px solid #000002;

		div {
			font-size: 16px;
			padding: 0.5%;
			margin: 0.5%;
			justify-content: center;
		}
	}
`

const LayoutXY = styled(Layout)`

	text-align: center;

	div.subheader {
		background: ${Variables.Pallet.darken2} !important;
	  	color: ${Variables.Pallet.dark} !important;
	  	font-size: 20px;
	}
	
	div.ant-layout-header {
	  	background: ${ Variables.Pallet.darken2} !important;
	  	font-size: 3em;
		justify-content: center;
		height: 150px !important;
  		line-height: 150px !important;

		div {
			justify-content: flex-end;
			padding: 0 5%;
			color: ${Variables.Pallet.highlight} !important;
		}
	}

  	div.ant-layout-content {
	  	background: ${Variables.Pallet.darken2} !important;
	  	padding: 1%;

		div {
			padding: 1%;
			justify-content: center;
		}
	}
`

const LayoutXZ = styled(Layout)`

	text-align: center;

	
	background: ${Variables.Pallet.medium} !important;
  	color: ${Variables.Pallet.lighten} !important;
	
	
	div.ant-layout-header {
	  	background: ${Variables.Pallet.medium} !important;
	  	color: ${Variables.Pallet.lighten} !important;
	  	font-size: 3em;
		justify-content: center;
		height: 150px !important;
  		line-height: 150px !important;

		div {
			justify-content: flex-end;
			padding: 0 5%;
			background: ${Variables.Pallet.dark} !important;
	  		color: ${Variables.Pallet.lighten} !important;
		}
	}

  	div.ant-layout-content {
	  	background: ${Variables.Pallet.medium} !important;
	  	font-size: 20px;
	  	padding: 3%;

		div {
			padding: 0.15% 0 1%;
			justify-content: center;

			h3 {
				color: ${Variables.Pallet.dark} !important;	
				font-size: 20px;
			}
			
		}

		div.tech-wrapper {
			padding: 1% !important;

			.ant-tag {
				padding: 0.5% 1.5% 2%;
				font-size: 14px;
				background-color: ${Variables.Pallet.dark} !important;	
			}
		}
	}
`

const LayoutXW = styled(Layout)`

	text-align: center;

	
	background: ${Variables.Pallet.darkred} !important;
  	color: ${Variables.Pallet.lighten} !important;
	
	
	div.ant-layout-header {
	  	background: ${Variables.Pallet.darkred} !important;
	  	color: ${Variables.Pallet.lighten} !important;
	  	font-size: 3em;
		justify-content: center;
		height: 150px !important;
  		line-height: 150px !important;

		div {
			justify-content: flex-end;
			padding: 0 5%;
			background: ${Variables.Pallet.dark} !important;
	  		color: ${Variables.Pallet.lighten} !important;
		}
	}

  	div.ant-layout-content {
	  	background: ${Variables.Pallet.darkred} !important;
	  	font-size: 20px;
	  	height: 400px;
		line-height: 400px;
	  	
		div {
			padding: 0 0 0.3%;
			
			h3 {
				color: ${Variables.Pallet.lighten} !important;	
				font-size: 20px;
			}
			
		}
	}
`

const IconX = styled(Icon)`
	font-size: 80px;
	color: ${Variables.Pallet.medium} !important;
`

export {
	Flex, 
	BodyText, 
	HeaderX, 
	ContentX, 
	LayoutX, 
	IconX, 
	LayoutXY, 
	LayoutXZ, 
	LayoutXW
}