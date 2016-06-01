$(document).ready(function () {
    //Toggle fullscreen
    $("#panel-fullscreen").click(function (e) {
        e.preventDefault();
        
        var $this = $(this);
        var table = $('#example').DataTable();
       
        if ($this.children('i').hasClass('glyphicon-resize-full'))
        {
            $this.children('i').removeClass('glyphicon-resize-full');
            $this.children('i').addClass('glyphicon-resize-small');
            $('.dataTables_scrollBody').css("max-height","1000px");
        }
        else if ($this.children('i').hasClass('glyphicon-resize-small'))
        {
            $this.children('i').removeClass('glyphicon-resize-small');
            $this.children('i').addClass('glyphicon-resize-full');
            $('.dataTables_scrollBody').css("max-height","350px");
        }
        $(this).closest('.panel').toggleClass('panel-fullscreen');
        table.columns.adjust().draw();
        
    });
    
    $('#example').DataTable({
        fixedHeader:    true,
    	scrollY:       	350,
        scrollCollapse: true,
        paging:         false,
        searching:         false,
        "info": false
    });
    
    $('[data-toggle="tooltip"]').tooltip();
});
