(function() {
  $(function() {
    var calculateWidths, count, delay, doChange, switcher;
    // word switcher
    switcher = $('#word-switcher');
    delay = 2000;
    count = switcher.find('p').length;
    calculateWidths = function() {
      switcher.find('p').each(function(index) {
        $(this).attr('data-width', $(this).width());
      });
      switcher.width(switcher.find('.active').attr('data-width'));
    };
    doChange = function() {
      var currentItem, nextItem;
      nextItem = void 0;
      currentItem = parseInt(switcher.find('.active').attr('data-oid'));
      if (currentItem === count - 1) {
        nextItem = 0;
      } else {
        nextItem = currentItem + 1;
      }
      switcher.addClass('in');
      switcher.find('[data-oid="' + currentItem + '"]').removeClass('active');
      switcher.find('[data-oid="' + nextItem + '"]').addClass('active');
      switcher.width(switcher.find('[data-oid="' + nextItem + '"]').attr('data-width'));
      setTimeout(doChange, delay);
    };
    calculateWidths();
    $(window).resize(function() {
      calculateWidths();
    });
    setTimeout(doChange, delay);
  });

}).call(this);