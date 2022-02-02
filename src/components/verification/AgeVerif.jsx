import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const AgeVerif = () => {
  const videoHeight = 288;
  const videoWidth = 512;
  const [showVideo, setShowVideo] = useState(false);
  const [initial, setInitial] = useState(false);
  const [playing, setPlaying] = useState(true);
  var agePrediction = 0;

  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + "/models";
      setInitial(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
      ]);
    };
    loadModels();
  }, []);

  function startVideo() {
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        videoRef.current.srcObject = stream;
      },
      (err) => console.log(err)
    );
  }

  const navigate = useNavigate();

  const handleVideoplay = async () => {
    if (initial) {
      setInitial(false);
    }
    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
      videoRef.current
    );
    const displaySize = { width: videoWidth, height: videoHeight };
    faceapi.matchDimensions(canvasRef.current, displaySize);
    try {
      const detectionWithAgeAndGender = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withAgeAndGender();

      agePrediction = Math.floor(detectionWithAgeAndGender.age) + 10;

      verifState();
      if (agePrediction > 50) {
        navigate("/signup");
      } else {
        navigate("/landing");
      }
    } catch (error) {
      console.error(error);
    }
  };
  function verifState() {
    stopVideo();
  }
  const stopVideo = () => {
    setPlaying(false);
    videoRef.current.srcObject.getTracks()[0].stop();

    clearInterval();
  };

  return (
    <>
      <div className="  h-screen w-full flex  flex-col justify-between items-center overflow-hidden select-none">
        <div className="flex flex-col">
          {" "}
          <h1 className="text-7xl bg-white ">Welcome! </h1>
          <h2 className="text-gray-900 bg-white text-3xl font-black">
            Please click <i className="fa fa-play" aria-hidden="true"></i>
            &nbsp; and smile to the webcam to analyze your age!!
          </h2>
          <h3>if you have a problem please contact us </h3>{" "}
          <strong>here</strong>
        </div>

        <div className="relative max-h-sm max-w-sm ">
          {showVideo ? (
            <>
              <span>{initial ? "waiting" : "Ready"}</span>

              <div>
                <video
                  className="w-full h-full object-cover rounded-3xl border-2 border-white"
                  ref={videoRef}
                  autoPlay
                  muted
                  height={videoHeight}
                  width={videoWidth}
                  onPlay={handleVideoplay}
                />
                <canvas ref={canvasRef} />
              </div>
            </>
          ) : (
            ""
          )}

          <div className="absolute py-2 bottom-0 left-0 right-0 flex justify-center">
            <div className="rounded-full p-2 bg-gray-900 text-white mr-2 cursor-pointer hover:bg-gray-700 transition-all duration-150 ease-linear">
              <i
                className="fa fa-play"
                aria-hidden="true"
                onClick={() => {
                  setShowVideo(!showVideo);
                  startVideo();
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgeVerif;
