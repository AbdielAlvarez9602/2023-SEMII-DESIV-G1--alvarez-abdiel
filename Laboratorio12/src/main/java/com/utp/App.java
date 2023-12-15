package com.utp;

import static spark.Spark.*;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class App {
    private static List<Integer> notas = new ArrayList<>();

    public static void main(String[] args) {
    
        port(8080);

        get("/notas/", (req, res) -> {
            JSONObject response = new JSONObject()
                    .put("data", new JSONArray(notas))
                    .put("average", calcularPromedio(notas));
            return response.toString();
        });

        post("/notas/", (req, res) -> {
            int valu/**
             * @return
             */
            e = Integer.parseInt(req.body());
            notas.add(value);
            return getResponse();
        });

        get("/notas/:id", (req, res) -> {
            int id = Integer.parseInt(req.params(":id"));
            return (id >= 0 && id < notas.size()) ? notas.get(id).toString() : "Nota no encontrada";
        });

        after((req, res) -> res.type("application/json"));

        after((req, res) -> res.body(getResponse()));
    }

    private static double calcularPromedio(List<Integer> notas) {
        if (notas.isEmpty()) {
            return 0;
        }

        int suma = notas.stream().mapToInt(Integer::intValue).sum();
        return (double) suma / notas.size();
    }

    private static String getResponse() {
        return new JSONObject()
                .put("data", new JSONArray(notas))
                .put("average", calcularPromedio(notas))
                .toString();
    }
}