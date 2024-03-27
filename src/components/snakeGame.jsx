'use client'
import React, { useEffect, useRef } from 'react';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const resolution = 10; // adjust as needed
  const fps = 10;

  let canvas, ctx, snake, direction, food;

  const initialize = () => {
    canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available
    ctx = canvas.getContext('2d');

    // Initialize snake
    snake = [{ x: 5, y: 5 }]; // Initial position
    direction = 'right';

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height =  window.innerHeight;

    // Generate initial food
    food = generateFood();
  };

  const generateFood = () => {
    const foodX = Math.floor(Math.random() * (canvas.width / resolution));
    const foodY = Math.floor(Math.random() * (canvas.height / resolution));

    return { x: foodX, y: foodY };
  };

  const drawFood = () => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(food.x * resolution, food.y * resolution, resolution, resolution);
  };

  const moveSnake = () => {
    const head = { ...snake[0] };

    switch (direction) {
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
      default:
        break;
    }

    // Check if the snake goes out of bounds and wrap it
    head.x = (head.x + canvas.width / resolution) % (canvas.width / resolution);
    head.y = (head.y + canvas.height / resolution) % (canvas.height / resolution);

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
      // Generate new food
      food = generateFood();
      // Grow the snake
      snake.push({});
    }

    snake.unshift(head);
    snake.pop();
  };

  const drawSnake = () => {
    ctx.fillStyle = 'cyan';
    snake.forEach((segment) => {
      ctx.fillRect(segment.x * resolution, segment.y * resolution, resolution, resolution);
    });
  };

  const draw = () => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    drawSnake();

    // Draw food
    drawFood();
  };

  useEffect(() => {
    initialize();

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'w':
          direction = 'up';
          break;
        case 's':
          direction = 'down';
          break;
        case 'a':
          direction = 'left';
          break;
        case 'd':
          direction = 'right';
          break;
        default:
          break;
    
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const gameLoop = setInterval(() => {
      moveSnake();
      draw();
    }, 1000 / fps);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [canvas]);

  return (
  <div className='relative bottom-0 overflow-hidden w-full h-100vh snake'>
    <canvas ref={canvasRef} className="snake-game-canvas" />;
  </div>
  )
  
  
};

export default SnakeGame;
