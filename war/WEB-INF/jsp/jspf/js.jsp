<!-- common js(lib) -->
<script type="text/javascript" src="js/lib/modernizr-2.6.2.js"></script>
<script type="text/javascript" src="js/lib/jquery-1.9.1.js"></script>
<script type="text/javascript" src="js/lib/underscore-min.js"></script>
<script type="text/javascript" src="js/lib/qunit-1.11.0.js"></script>

<!-- common js(user) -->
<script type="text/javascript" src="js/assert.js"></script>
<script type="text/javascript" src="js/debug.js"></script>
<script type="text/javascript" src="js/point.js"></script>

<!-- runtime js(user) -->
<script type="text/javascript">
var pan; if (! pan) { pan = {}; }
pan.view = "${view}";
</script>

<!-- badukpan-related js -->
<script type="text/javascript" src="js/pan.c.js"></script>
<script type="text/javascript" src="js/pan.ut.js"></script>
<script type="text/javascript" src="js/pan.board.js"></script>
<script type="text/javascript" src="js/pan.stone.js"></script>
<script type="text/javascript" src="js/pan.badukpan.js"></script>

<!-- test -->
<script type="text/javascript" src="js/test/debug-test.js"></script>
<script type="text/javascript" src="js/test/pan.c-test.js"></script>
<script type="text/javascript" src="js/test/pan.board-test.js"></script>
<script type="text/javascript" src="js/test/point-test.js"></script>
<!-- end of test -->