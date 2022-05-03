<?php

class Courses {
    

    private $db;


    public function __construct($db) {
        $this->db = $db;
    }


    public function create_table($string) {
        $this->db->write_query($string);
    }


    public function create_course($course, $author, $creation_date) {
        $this->db->write_query("insert into courses (course, author, creation_date)
                                SELECT '$course', $author', '$creation_date'
                                WHERE NOT EXISTS
                                (SELECT 1 FROM courses WHERE course ='$course')");
    }


    public function show_courses() {
        $courses = $this->db->read_query("select * from courses");
        foreach ($courses as $course) {
            print( $course [ 'course' ] . "</br>");
        }
    }

}