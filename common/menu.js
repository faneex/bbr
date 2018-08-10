var rootPath = '/';


function IsLoginUser() {
    return (UI_LOGIN == true);
}
function IsTester() {
    return (UI_TESTER == true);
}
function IsIssueOpen() {
    return (ISSUE_OPEN == true);
}

function menu(menuId) {
    switch(menuId) {
    	
		case 4:     // game store
		    location.href = rootPath + 'mart.php';
		    break;
		case 5:     // game store
		    location.href = '';
		    break;
        case 0:     
            location.href = rootPath;
            break;
        case 901:     
            location.href = rootPath + 'agent.php?id=19';
            break;
        case 902: 
		    location.href = rootPath + 'agent.php?id=15';
           // window.open('agent.php?id=15',"_blank");
            break;
        case 903:     
            location.href = rootPath + 'rank.php';
            break;
        case 101:
		    location.href = rootPath + 'agent.php?id=15';
            //window.open('agent.php?id=15',"_blank");
            break;
        case 1001:     
            location.href = rootPath + 'member.php?do=reg';
            break;
        case 1002:     
            location.href = rootPath + 'member.php?do=getbackpwd';
            break;
        case 1:    
            location.href = rootPath + 'index.php';
		    break;
		case 11:     // 新闻公告
		    location.href = rootPath + 'list.php?classname=News';
		    break;
		case 12:     // 活动讯息
		    location.href = rootPath + 'list.php?classname=Event';
		    break;
		    
		case 20:     // 会员中心
		    location.href = rootPath + 'member.php';
		    break;
		case 21:     // 排行榜
		    location.href = rootPath + 'rank.php';
		    break;
		case 22:     // 推广员系统
		    location.href = rootPath + 'member.php?do=tgtext';
		    break;
		case 23:     // 注册
		    location.href = rootPath + 'member.php?do=reg';
		    break;
		case 24:     // 修改密码
		    location.href = rootPath + 'member.php?do=editpwd';
		    break;
		case 25:     // 退出
		    location.href = rootPath + 'member/logout.php';
		    break;
		    
		case 30:	
		case 31:	//在线转生
		    location.href = rootPath + 'extend.php?do=webreborn';
		    break;
		case 32: 	//升级装备
		    location.href = rootPath + 'extend.php?do=webupitem';//alert('暫未釋出！武器裝備最高+50，可從遊戲中獲得！');
		    break;
		case 33: 	//在线洗点
		    location.href = rootPath + 'extend.php?do=webxd';
		    break;
		case 34:	//在线加点
		    location.href = rootPath + 'extend.php?do=webjd';
		    break;
		case 35: 	//洗红
		    location.href = rootPath + 'extend.php?do=webxb';
		    break;
		case 36: 	//在线变性
		    location.href = rootPath + 'extend.php?do=webchangesex';
		    break;
		case 37:	//在线泡点
		    location.href = rootPath + 'extend.php?do=webpd';
		    break;
		case 38: 	//修改安全码
		    location.href = rootPath + 'extend.php?do=editsafepwd';
		    break;
		case 39: 	//消费记录
		    location.href = rootPath + 'mart.php?do=itemorder';
		    break;
		case 391: 	//DZP
		    location.href = rootPath + 'event/dzp/index.php';
		    break;
		case 40:     // 程式下载
		    location.href = rootPath + 'download.php';
		    break;
		case 41:     // 程式下载
		    location.href = rootPath + 'download.php';
		    break;
		case 42:     // 补丁下载
		    location.href = rootPath + 'download.php';
		    break;
		case 43:     //
		    location.href = rootPath + 'extend.php?do=webdelitem';//alert('暫未釋出!'); 
		    break;
		case 44:     //
		    location.href = rootPath + 'extend.php?do=webcc';//alert('暫未釋出!'); 
		    break;
		case 45:     //
		    location.href = rootPath + 'extend.php?do=webcs';//alert('暫未釋出!'); 
		    break;
			
		case 50: 
		    location.href = rootPath + 'mart.php';
		    break;
		case 51:     // 商城
		    location.href = rootPath + 'mart.php';
		    break;
		case 52:     // 商城
		    location.href = rootPath + 'mart.php';
		    break;
		case 53:     // 商城
		    location.href = rootPath + 'mart.php';
		    break;
		case 54:     // 商城
		    location.href = rootPath + 'mart.php';
		    break;
		case 55:     // 商城
		    location.href = rootPath + 'mart.php?do=itemorder';
		    break;
		    
		case 60:      // 充值中心
		    location.href = rootPath + 'agent.php?id=19';
		    break;
		case 61:      // 充值中心
		    location.href = rootPath + 'agent.php?id=15';
		    break;
		case 62:      // 充值中心
		    location.href = rootPath + 'agent.php?id=17';
		    break;
		case 63:      // 充值中心
		    location.href = rootPath + 'agent.php?id=18';
		    break;
		case 64:      // 充值中心
		    location.href = rootPath + 'agent.php?id=28';
		    break;
		case 65:      // 充值中心
		    location.href = rootPath + 'member.php?do=payorder';
		    break;

		case 1000:      // mart商品
		    alert('暫未釋出!');
		    break;
		    
		default:
		    location.href = rootPath +'?menuId='+ menuId;
		    break;
    }
}


function doNothing() { }