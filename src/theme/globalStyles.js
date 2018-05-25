import { injectGlobal }  from 'styled-components';
import Variables from './variables';

/* eslint-disabled */
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Carme|Jura');

	@font-face {
		font-family: 'anticon';
		src: url('https://at.alicdn.com/t/font_zck90zmlh7hf47vi.eot');
		/* IE9*/
		src: url('https://at.alicdn.com/t/font_zck90zmlh7hf47vi.eot?#iefix') format('embedded-opentype'), /* chrome、firefox */ url('https://at.alicdn.com/t/font_zck90zmlh7hf47vi.woff') format('woff'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/ url('https://at.alicdn.com/t/font_zck90zmlh7hf47vi.ttf') format('truetype'), /* iOS 4.1- */ url('https://at.alicdn.com/t/font_zck90zmlh7hf47vi.svg#iconfont') format('svg');
	}

	body {
		font-family: 'Carme', sans-serif;
	}

	.ant-layout-header, .ant-menu-dark.ant-menu-horizontal, 
	.ant-menu-dark, .ant-menu-dark.ant-menu-horizontal > .ant-menu-item, 
	.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
		background: transparent !important;
		border-color: transparent !important;
	}

	.logo-wrapper {
		text-align: center;
		padding: 1% 0;
	}

	.ant-progress-wrapper {
		display: flex;
    	justify-content: space-around;
	}

	.ant-menu.primary-menu {
		border-bottom: 2px solid white !important;
		padding: 1% 20% 0;
		margin: 0 4%;

		.ant-menu-item {
			line-height: 40px !important;
			width: 33%; 
			a.primary-menu-link {
				text-transform: uppercase;
				text-align: center;
				font-size: 16px;
				padding: 0;
				border: 2px solid transparent;
				font-weight: normal !important;
			}

			a.active {
				border: 2px solid white;
				border-bottom: none;
				font-weight: bold;
			}
		}
	}

	.ant-menu.secondary-menu {
		padding: 0px 0%;
		display: flex;
		justify-content: center;
		-webkit-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
   -moz-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
     -o-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
        transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */

-webkit-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
   -moz-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
     -o-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
		transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */
		
		.ant-menu-item { 

			line-height: 40px !important;
			
			a.secondary-menu-link {
				text-transform: uppercase;
				text-align: center;
				font-size: 14px;
				padding: 0;
				font-weight: normal !important;
			}
	
			a.active {
				
			}
		}
		
	}


	.ant-layout-footer {
		background: ${ Variables.Pallet.dark };
		color: ${ Variables.Pallet.medium };
	}

	.hidden {
		display: none;
	}

	.toggleable {
		position: relative;
		width: 100%;
    	text-align: center;
    	height: 650px;
    	line-height: 650px;
	}

	.service-icon-wrapper {

		i.anticon {
			background: aliceblue;
		    padding: 25px;
		    border-radius: 50%;
		    border: 13px solid #ececec;
		    font-size: 50px;
		    margin-bottom: 10px;
		}
	}

	/* For demo */
	.ant-carousel .slick-slide {
		text-align: center;
		background: transparent;
		overflow: hidden;
	}

	.ant-carousel .slick-slide h3 {
		color: #fff;
	}


	.ant-affix {
		background: rgba(5,5,5,0.7);
		height: 100px;
		-webkit-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
		-moz-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
			-o-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); 
				transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */

		-webkit-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
		-moz-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
			-o-transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); 
				transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750); /* linear */

		.primary-menu {
			line-height: 36px !important;
			a.primary-menu-link {
				font-size: 14px !important;
			}
		}

		.secondary-menu {
			line-height: 36px !important;
			a.secondary-menu-link {
				font-size:12px;
			}
		}

	}

	.home-header-wrapper {
		position: absolute;
		z-index: 1000;
		width: 100%;
		background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
		background: rgba(20,20,20,0.5);
		padding: 0 0 40px;

		.header-contact-wrapper {
			border-bottom: 1px solid rgba(20,20,20,0.3);
			color: white;
			padding: 5px 30px;
		}
	}

	hr {
		border: 0;
		height: 1px;
		margin: 0 10%;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
	}

	.two-cols-text-wrapper, .section-wrapper {
		padding: 50px;
		h1, h3, p {
			padding-bottom: 30px;
		}

		h1 { 
			font-size: 40px; 
			font-family: 'Jura', sans-serif;
		}

		p {
			font-size: 16px; 
			margin-bottom: 26px;
		}

		h3 { 
			font-size: 16px; 
			text-transform: uppercase;
		}

		button {
			height: 45px;
			text-transform: uppercase;
		}

		.image-wrapper {
			padding-bottom: 30px;
			img {
				margin-right: 10px;
			}
		}

		.icon-wrapper {
			span {
				margin-right: 10px;
				font-size: 16px;
			}
		}
	}

	.section-wrapper {
		height: 800px;
		color: white;
		background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
		background: rgba(20,20,20,0.3);

		h1 {
			color: white;
		}

		button {
			background-color: transparent !important;
			border: 2px solid white;
		}

	}

	.ant-layout-footer {
		padding: 0;
		.footer-wrapper {
			padding-top: 2%;
	
			.ant-card {
				font-size:14px;
				color: rgba(150,150,150);
				background: rgba(50,50,50,0.3);
				border-color: transparent;
	
				h3 { 
					color: white;
					font-size: 16px; 
					padding-bottom: 10px;
					text-transform: uppercase;
				}

				.phone-wrapper {
					.label {
						padding-bottom:10px;
					}

					.phone-number {
						padding-bottom:20px;
						font-size:20px;
					}
				}
			}
	
			.foot-wrapper {
				margin-top: 2%;
				padding: 15px 30px;
				border-top: 1px solid rgba(50,50,50,0.6);
				p {
					padding-top:5px;
					color: rgba(150,150,150)
				}

				.ant-avatar {
					background: transparent;
					border: 1px solid rgba(150,150,150);
				}
			}
		}
	}


`;