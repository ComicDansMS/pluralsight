<?php

class DB {

    private $handle;
    private $logger;

    public function __construct($logger) {

        $this->handle = new PDO('sqlite:database.db');
        
        $this->logger = $logger;

    }

    public function read_query($query) {

        $result = $this->handle->query( $query );

        $this->logger->info( 'Read query executed', [ 'query' => $query ] );

        return $result;

    }
    
    public function write_query($query) {

        $result = $this->handle->query( $query );

        $this->logger->notice( 'Read query executed', [ 'query' =>  $query ] );

        return $result;

    }

}
