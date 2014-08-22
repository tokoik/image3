#version 330

uniform sampler2DRect image0;
uniform sampler2DRect image1;

layout (location = 0) out vec4 fc;

vec4 average(sampler2DRect s, vec2 t)
{
  fc = texture(s, t);
  
  fc += textureOffset(s, t, ivec2(-2, -2));
  fc += textureOffset(s, t, ivec2(-1, -2));
  fc += textureOffset(s, t, ivec2( 0, -2));
  fc += textureOffset(s, t, ivec2( 1, -2));
  fc += textureOffset(s, t, ivec2( 2, -2));
  
  fc += textureOffset(s, t, ivec2(-2, -1));
  fc += textureOffset(s, t, ivec2(-1, -1));
  fc += textureOffset(s, t, ivec2( 0, -1));
  fc += textureOffset(s, t, ivec2( 1, -1));
  fc += textureOffset(s, t, ivec2( 2, -1));
  
  fc += textureOffset(s, t, ivec2(-2,  0));
  fc += textureOffset(s, t, ivec2(-1,  0));
  fc += textureOffset(s, t, ivec2( 1,  0));
  fc += textureOffset(s, t, ivec2( 2,  0));
  
  fc += textureOffset(s, t, ivec2(-2,  1));
  fc += textureOffset(s, t, ivec2(-1,  1));
  fc += textureOffset(s, t, ivec2( 0,  1));
  fc += textureOffset(s, t, ivec2( 1,  1));
  fc += textureOffset(s, t, ivec2( 2,  1));
  
  fc += textureOffset(s, t, ivec2(-2,  2));
  fc += textureOffset(s, t, ivec2(-1,  2));
  fc += textureOffset(s, t, ivec2( 0,  2));
  fc += textureOffset(s, t, ivec2( 1,  2));
  fc += textureOffset(s, t, ivec2( 2,  2));
  
  return fc * 0.04;
}

void main()
{
  fc = abs(average(image0, gl_FragCoord.xy) - average(image1, gl_FragCoord.xy));
}
