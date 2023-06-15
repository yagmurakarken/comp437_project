import cv2 as cv
import numpy as np
import math
import matplotlib.pyplot as plt
import pandas as pd

frame1 = cv.imread("yoga_images/test3.jpg") # input
frame2 = cv.imread("yoga_images/refer3.jpg") # reference

# Ensure images are the same size
hi = min(frame1.shape[0], frame2.shape[0])
wi = min(frame1.shape[1], frame2.shape[1])
frame1 = cv.resize(frame1, (wi,hi))
frame2 = cv.resize(frame2, (wi,hi))

# Visualize images
fig = plt.figure(figsize = (10,20))
plt.subplot(121)
plt.imshow(frame1[:,:,::-1])
plt.subplot(122)
plt.imshow(frame2[:,:,::-1])

frameWidth = frame1.shape[1]
frameHeight = frame1.shape[0]

BODY_PARTS = { "Head": 0, "Neck": 1, "RShoulder": 2, "RElbow": 3, "RWrist": 4,
               "LShoulder": 5, "LElbow": 6, "LWrist": 7, "RHip": 8, "RKnee": 9,
               "RAnkle": 10, "LHip": 11, "LKnee": 12, "LAnkle": 13, "Chest": 14,
               "Background": 15 }

POSE_PAIRS = [ ["Head", "Neck"], ["Neck", "RShoulder"], ["RShoulder", "RElbow"],
               ["RElbow", "RWrist"], ["Neck", "LShoulder"], ["LShoulder", "LElbow"],
               ["LElbow", "LWrist"], ["Neck", "Chest"], ["Chest", "RHip"], ["RHip", "RKnee"],
               ["RKnee", "RAnkle"], ["Chest", "LHip"], ["LHip", "LKnee"], ["LKnee", "LAnkle"] ]

