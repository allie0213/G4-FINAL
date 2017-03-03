$(function(){
	$.ajax({
		type:'GET',
		url:'php/memberForum.php',
		dataType:'json',
		error:function(xhr) {
			// alert(xhr.status);
		},

		success:function(res){
			// alert(res);

			for(var i=0; i<res.length;i++){
				var temp = '<div class="m_post_box box1"><div class="m_post_info"><h3>';
							
					temp += res[i].pla_title;
					temp += '</h3><div class="aa"><p><img src="img/forum/f_004.png"><span><a href="">';
					temp += res[i].mem_name;
					temp += '</a></span></p><p>';
					temp += res[i].pla_date;
					temp +='發表</p></div><div class="f_btn"><button>編輯</button>';
					temp +='<button>刪除</button></div><div class="m_type"><p>';
					temp +='天文攝影';
					temp +='</p></div></div></div>';

			$('.m_tab_content1 li').append(temp);

			}
			
		}
	})
})