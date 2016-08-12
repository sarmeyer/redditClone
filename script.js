var app = angular.module("reddit", ['angularMoment']);

app.controller('MainController', function($scope) {
    $scope.view = {};
    $scope.commentText = {};
    $scope.add = false;
    $scope.showAdd = function() {
        if ($scope.add === true) {
            $scope.add = false;
        } else {
            $scope.add = true;
        }
    }

    $scope.commentsShowing = false;
    $scope.showComments = function() {
        this.commentsShowing = !this.commentsShowing
    }
    $scope.commentFormShowing = false;
    $scope.showCommentForm = function(post) {
        this.commentFormShowing = !this.commentFormShowing;
    }
    $scope.posts = [{
        title: 'Arches',
        author: 'Sarah',
        imgurl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Delicatearch1.jpg',
        description: 'This site features more than 2,000 natural sandstone arches, including the famous Delicate Arch. In a desert climate, millions of years of erosion have led to these structures, and the arid ground has life-sustaining soil crust and potholes, which serve as natural water-collecting basins. Other geologic formations are stone columns, spires, fins, and towers.',
        votes: 5,
        date: new Date(),
        comments: [{
            thoughts: 'Too pretty',
            commentAuthor: 'Sarah'
        }]
    }, {
        title: 'Canyonlands',
        author: 'Mike',
        imgurl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Canyonlands_Needles.jpg',
        description: 'This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. There are rock pinnacles and other naturally sculpted rock formations, as well as artifacts from Ancient Pueblo peoples.',
        date: '11/12/2015',
        votes: 1,
        comments: [{
            thoughts: 'One of the best places ever!',
            commentAuthor: 'Sarah'
        }, {
            thoughts: 'A long drive but so worth it',
            commentAuthor: 'Mike'
        }]
    }, {
        title: 'Crater Lake',
        author: 'Paul',
        imgurl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Crater_lake_oregon.jpg',
        description: 'Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. It is the deepest lake in the United States and is famous for its vivid blue color and water clarity. There are two more recent volcanic islands in the lake, and, with no inlets or outlets, all water comes through precipitation.',
        date: '11/12/2015',
        votes: 0,
        comments: []
    }, {
        title: 'Great Sand Dunes',
        author: 'Katie',
        imgurl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Coloradodunes.jpg',
        description: 'The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.',
        date: '11/12/2015',
        votes: 3,
        comments: []
    }];
    $scope.submitPost = function() {
        $scope.view.date = new Date();
        $scope.view.votes = 0;
        $scope.view.comments = [];
        $scope.posts.push($scope.view);
    };

    $scope.submitComment = function(postObj) {
        postObj.comments.push($scope.commentText);
    }
});
