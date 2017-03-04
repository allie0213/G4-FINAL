$(function() {

        var mem = JSON.parse(localStorage.getItem('mem'));

        // $('#inline-content').click(function(){
        // 	if(localStorage.mem){
        // 		$('#memNoUpload').val(mem.mem_no);
        // 	}else{
        // 		alert('請先登入會員');
        // 	}

        // })


        var outbox = $('#outbox');

        $.ajax({
            type: 'GET',
            url: 'php/photo.php',
            dataType: 'json',
            success: function(res) {
                for (var i = 0; i < res.length; i++) {
                    // var tag = res[i].pho_tag;
                    // tag = tag.split("#");
                    var temp = "";
                    temp += '<div class="p-n-pic content_box wow fadeInDown">';
                    temp += '<div class="whitebox"></div><div class="p-title">';
                    temp += '<h5>' + res[i].pho_name + '</h5></div><div class="user">';
                    temp += '<img src="' + res[i].mem_img + '"><p>' + res[i].mem_name + '</p></div>';
                    temp += '<a href="photo-inside.php?pho_no=' + res[i].pho_no +'">';
                    temp += '<img src="' + res[i].pho_path + '"></a><div class="p-n-pic-tag"><div class="txt">';
                    temp += '<a href="#">' + res[i].pho_tag + '</a>';
                    temp += '</div></div><div class="p-information"><div class="left"><span class="p-information-fav"><i class="fa fa-heart" aria-hidden="true"></i>';
                    temp += res[i].pho_collect + '</span><span class="p-information-views"><i class="fa fa-eye" aria-hidden="true"></i>';
                    temp += res[i].pho_view + '</span></div><div class="right"><span class="p-information-day"><i class="fa fa-map-marker" aria-hidden="true"></i>';
                    temp += res[i].pho_loc + '</span></div></div><div class="p-n-icon"><div class="a"><i class="fa fa-heart" aria-hidden="true"></i><h5></h5></div>';
                    temp += '<div class="b" id="b"><i class="fa fa-share" id="b" aria-hidden="true"></i></div></div>';
                    temp += '<div class="p-n-share"  id="divShow" style="opacity: 0"><p><i class="fa fa-times" aria-hidden="true" ></i></p>';
                    temp += '<h5 class="share-txt">分享一張相片至:</h5><div class="share-share">';
                    temp += '<i class="fa fa-facebook-square" aria-hidden="true"></i>';
                    temp += '<i class="fa fa-instagram" aria-hidden="true"></i>';
                    temp += '<i class="fa fa-twitter-square" aria-hidden="true"></i></div></div></div>';
                    outbox.append(temp);
                }

            }
        })

        $('#hotestPhoto').click(function(e) {
            outbox.empty();
            e.preventDefault();
            $(this).css('color', '#7FC8E7').siblings('a').css('color', '#fff');
            $.ajax({
                type: 'GET',
                url: 'php/photoHot.php',
                dataType: 'json',
                success: function(res) {
                    for (var i = 0; i < res.length; i++) {
                        // var tag = res[i].pho_tag;
                        // tag = tag.split("#");
                        var temp = "";
                        temp += '<div class="p-n-pic content_box wow fadeInDown">';
                        temp += '<div class="whitebox"></div><div class="p-title">';
                        temp += '<h5>' + res[i].pho_name + '</h5></div><div class="user">';
                        temp += '<img src="' + res[i].mem_img + '"><p>' + res[i].mem_name + '</p></div>';
                        temp += '<a href="photo-inside.php?pho_no=' + res[i].pho_no + '">';
                        temp += '<img src="' + res[i].pho_path + '"></a><div class="p-n-pic-tag"><div class="txt">';
                        temp += '<a href="#">' + res[i].pho_tag + '</a>';
                        temp += '</div></div><div class="p-information"><div class="left"><span class="p-information-fav"><i class="fa fa-heart" aria-hidden="true"></i>';
                        temp += res[i].pho_collect + '</span><span class="p-information-views"><i class="fa fa-eye" aria-hidden="true"></i>';
                        temp += res[i].pho_view + '</span></div><div class="right"><span class="p-information-day"><i class="fa fa-map-marker" aria-hidden="true"></i>';
                        temp += res[i].pho_loc + '</span></div></div><div class="p-n-icon"><div class="a"><i class="fa fa-heart" aria-hidden="true"></i><h5></h5></div>';
                        temp += '<div class="b" id="b"><i class="fa fa-share" id="b" aria-hidden="true"></i></div></div>';
                        temp += '<div class="p-n-share"  id="divShow" style="opacity: 0"><p><i class="fa fa-times" aria-hidden="true" ></i></p>';
                        temp += '<h5 class="share-txt">分享一張相片至:</h5><div class="share-share">';
                        temp += '<i class="fa fa-facebook-square" aria-hidden="true"></i>';
                        temp += '<i class="fa fa-instagram" aria-hidden="true"></i>';
                        temp += '<i class="fa fa-twitter-square" aria-hidden="true"></i></div></div></div>';
                        outbox.append(temp);
                    }
                }
            })
        })


        $('#newestPhoto').click(function(e) {
            outbox.empty();
            e.preventDefault();
            $(this).css('color', '#7FC8E7').siblings('a').css('color', '#fff');
            $.ajax({
                type: 'GET',
                url: 'php/photo.php',
                dataType: 'json',
                success: function(res) {
                    for (var i = 0; i < res.length; i++) {
                        // var tag = res[i].pho_tag;
                        // tag = tag.split("#");
                        var temp = "";
                        temp += '<div class="p-n-pic content_box wow fadeInDown">';
                        temp += '<div class="whitebox"></div><div class="p-title">';
                        temp += '<h5>' + res[i].pho_name + '</h5></div><div class="user">';
                        temp += '<img src="' + res[i].mem_img + '"><p>' + res[i].mem_name + '</p></div>';
                        temp += '<a href="photo-inside.php?pho_no=' + res[i].pho_no + '">';
                        temp += '<img src="' + res[i].pho_path + '"></a><div class="p-n-pic-tag"><div class="txt">';
                        temp += '<a href="#">' + res[i].pho_tag + '</a>';
                        temp += '</div></div><div class="p-information"><div class="left"><span class="p-information-fav"><i class="fa fa-heart" aria-hidden="true"></i>';
                        temp += res[i].pho_collect + '</span><span class="p-information-views"><i class="fa fa-eye" aria-hidden="true"></i>';
                        temp += res[i].pho_view + '</span></div><div class="right"><span class="p-information-day"><i class="fa fa-map-marker" aria-hidden="true"></i>';
                        temp += res[i].pho_loc + '</span></div></div><div class="p-n-icon"><div class="a"><i class="fa fa-heart" aria-hidden="true"></i><h5></h5></div>';
                        temp += '<div class="b" id="b"><i class="fa fa-share" id="b" aria-hidden="true"></i></div></div>';
                        temp += '<div class="p-n-share"  id="divShow" style="opacity: 0"><p><i class="fa fa-times" aria-hidden="true" ></i></p>';
                        temp += '<h5 class="share-txt">分享一張相片至:</h5><div class="share-share">';
                        temp += '<i class="fa fa-facebook-square" aria-hidden="true"></i>';
                        temp += '<i class="fa fa-instagram" aria-hidden="true"></i>';
                        temp += '<i class="fa fa-twitter-square" aria-hidden="true"></i></div></div></div>';
                        outbox.append(temp);
                    }
                }
            })
        })


        var phoSearch = $('#phoSearch');
        phoSearch.on('keyup', function() {
            outbox.empty();
            $.ajax({
                url: 'php/searchPhoto.php',
                type: 'post',
                dataType: 'json',
                data: {
                    keyword: phoSearch.val()
                },
                success: function(res) {
                    for (var i = 0; i < res.length; i++) {
                        var temp = "";
                        temp += '<div class="p-n-pic content_box wow fadeInDown">';
                        temp += '<div class="whitebox"></div><div class="p-title">';
                        temp += '<h5>' + res[i].pho_name + '</h5></div><div class="user">';
                        temp += '<img src="' + res[i].mem_img + '"><p>' + res[i].mem_name + '</p></div>';
                        temp += '<a href="photo-inside.php?pho_no=' + res[i].pho_no + '">';
                        temp += '<img src="' + res[i].pho_path + '"></a><div class="p-n-pic-tag"><div class="txt">';
                        temp += '<a href="#">' + res[i].pho_tag + '</a>';
                        temp += '</div></div><div class="p-information"><div class="left"><span class="p-information-fav"><i class="fa fa-heart" aria-hidden="true"></i>';
                        temp += res[i].pho_collect + '</span><span class="p-information-views"><i class="fa fa-eye" aria-hidden="true"></i>';
                        temp += res[i].pho_view + '</span></div><div class="right"><span class="p-information-day"><i class="fa fa-map-marker" aria-hidden="true"></i>';
                        temp += res[i].pho_loc + '</span></div></div><div class="p-n-icon"><div class="a"><i class="fa fa-heart" aria-hidden="true"></i><h5></h5></div>';
                        temp += '<div class="b" id="b"><i class="fa fa-share" id="b" aria-hidden="true"></i></div></div>';
                        temp += '<div class="p-n-share"  id="divShow" style="opacity: 0"><p><i class="fa fa-times" aria-hidden="true" ></i></p>';
                        temp += '<h5 class="share-txt">分享一張相片至:</h5><div class="share-share">';
                        temp += '<i class="fa fa-facebook-square" aria-hidden="true"></i>';
                        temp += '<i class="fa fa-instagram" aria-hidden="true"></i>';
                        temp += '<i class="fa fa-twitter-square" aria-hidden="true"></i></div></div></div>';
                        outbox.append(temp);
                    }
                }
            })
        })





    }) //ready
