package com.utp;

import java.util.List;

public class Pyramid {
    private List<List<Integer>> levels;
    private List<Integer> maxWeightPath;
    private int maxWeightSum;

    public Pyramid(List<List<Integer>> levels, List<Integer> maxWeightPath, int maxWeightSum) {
        this.levels = levels;
        this.maxWeightPath = maxWeightPath;
        this.maxWeightSum = maxWeightSum;
    }

    // Getter and Setter methods (Ctrl + N en VS Code puede ayudar a generar estos métodos)
    public List<List<Integer>> getLevels() {
        return levels;
    }

    public void setLevels(List<List<Integer>> levels) {
        this.levels = levels;
    }

    public List<Integer> getMaxWeightPath() {
        return maxWeightPath;
    }

    public void setMaxWeightPath(List<Integer> maxWeightPath) {
        this.maxWeightPath = maxWeightPath;
    }

    public int getMaxWeightSum() {
        return maxWeightSum;
    }

    public void setMaxWeightSum(int maxWeightSum) {
        this.maxWeightSum = maxWeightSum;
    }
}
