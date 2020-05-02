// @flow
import React from 'react';
import type { Node } from 'react';

import {
  ML_EXPERIMENTS_DEMO_MODELS_PATH,
  ML_EXPERIMENTS_GITHUB_NOTEBOOKS_URL,
} from '../../../constants/links';
import type { Experiment } from '../types';

import labels from './labels';

import cover from '../../../images/sketch_recognition_mlp.png';
import inputImageExample0 from './input-examples/0.png';
import inputImageExample1 from './input-examples/1.png';
import inputImageExample2 from './input-examples/2.png';
import inputImageExample3 from './input-examples/3.png';
import inputImageExample4 from './input-examples/4.png';
import SketchRecognition from '../../shared/SketchRecognition';

const experimentSlug = 'SketchRecognitionMLP';
const experimentName = 'Sketch Recognition (MLP)';
const experimentDescription = 'Hand-written sketch recognition using Multilayer Perceptron (MLP)';
const notebookUrl = `${ML_EXPERIMENTS_GITHUB_NOTEBOOKS_URL}/sketch_recognition_mlp/sketch_recognition_mlp.ipynb`;
const inputImagesExamples = [
  inputImageExample0,
  inputImageExample1,
  inputImageExample2,
  inputImageExample3,
  inputImageExample4,
];

const modelPath = `${ML_EXPERIMENTS_DEMO_MODELS_PATH}/sketch_recognition_mlp/model.json`;

const SketchRecognitionMLP = (): Node => {
  return (
    <SketchRecognition
      labels={labels}
      modelPath={modelPath}
    />
  );
};

const experiment: Experiment = {
  slug: experimentSlug,
  name: experimentName,
  description: experimentDescription,
  component: SketchRecognitionMLP,
  notebookUrl,
  cover,
  inputImageExamples: {
    images: inputImagesExamples,
    imageWidth: 50,
  },
};

export default experiment;