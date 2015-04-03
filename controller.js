/**
 * API
 *********************
 * ��MovieClip
 *********************
 * ��getMovieClip
 * @param string path
 * @return MovieClip | null
 * var mc = _root.getMovieClip(path);
 *
 *********************
 * ��Property
 *********************
 * ��getProperty
 * @param string _property
 * @return mixed | undefined
 * mc.getProperty(_property);
 *
 * ��setProperty
 * @param string _property
 * @param mixed value
 * mc.setProperty(_property, value);
 *
 * ��_property List
 * _x
 * _y
 * _xscale
 * _yscale
 * _currentframe
 * _totalframes
 * _alpha
 * _visible
 * _width
 * _height
 * _rotation
 *
 *********************
 * ��Variable
 *********************
 * ��getVariable
 * @param mixed key
 * mc.getVariable(key);
 *
 * ��setVariable
 * @param mixed key
 * @param mixed value
 * mc.setVariable(key, value);
 *
 *********************
 * ��Action
 *********************
 * ��play
 * mc.play();
 *
 * ��stop
 * mc.stop();
 *
 * ��stopAllSounds
 * mc.stopAllSounds();
 *
 * ��gotoAndPlay
 * @param int | string(label) value
 * mc.gotoAndPlay(value):
 *
 * ��gotoAndStop
 * @param int | string(label) value
 * mc.gotoAndStop(value):
 *
 * ��nextFrame
 * mc.nextFrame();
 *
 * ��previousFrame
 * mc.previousFrame();
 *
 * @param MovieClip _root
 * @constructor
 */
swf2js$Controller = function(_root)
{
//    // sample code
//    var mc = _root.getMovieClip('/');
//    if (mc) {
//        if (mc.getProperty('_currentframe') > 3) {
//            mc.gotoAndStop('end');
//        } else {
//            mc.gotoAndPlay(1);
//        }
//    }
}