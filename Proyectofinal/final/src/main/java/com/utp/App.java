// App.java
package com.utp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@RestController
public class App {

    private static List<Pyramid> storedPyramids = new ArrayList<>();

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @PostMapping("/storePyramid")
    public void storePyramid(@RequestBody Pyramid pyramid) {
        storedPyramids.add(pyramid);
    }

    @GetMapping("/getStoredPyramids")
    public List<Pyramid> getStoredPyramids() {
        return storedPyramids;
    }
}
